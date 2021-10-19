import { useState, useEffect } from "react";
import { fetchData } from "../../lib/artworks";
import { fetchWikiData } from "../../lib/wikidata";
import { fetchWikipediaExtract } from '../../lib/wikipedia';
import ArtworkView from '../../components/ArtworkView/ArtworkView';
import { initialData } from '../../lib/initial';

export async function getStaticPaths() {
  const allWorksData = initialData();
  const paths = allWorksData.map(work => {
    return {
      params: {
        id: `${work}`
      }
    }
  })

  return {
    paths, 
    fallback: false, 
  }

}

export async function getStaticProps({params}) {
  const worksData = await fetchData(params.id);
  const allWorksData = initialData();

  if (!worksData | !allWorksData ) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      object: worksData,
      objects: allWorksData,
    }
  }
}

export default function ViewbyID(props) {
  const data = props.object;
  const current = props.object.objectID;
  const objects = props.objects;
  const position = objects.indexOf(current);
  const text = "";
  const wikidata = data.objectWikidata_URL.match(/(\d+)/)[0];
  const [extract, setExtract] = useState(text);
  const [modal, setModal] = useState(false);

  const ClickHandler = (value) =>{
    setModal(value);
  }

  useEffect(() => {
    fetchWikiData(wikidata).then(response => {
      const wikipediaTitle = response.entities[`Q${wikidata}`].labels.en.value.split(' ').join('_')
      fetchWikipediaExtract(wikipediaTitle).then( data => {
        const queryData = data.query.pages;
        let pageid;
        for (var key in queryData) {
          pageid = key
        }
        const extractText = queryData[pageid].extract;
        setExtract(extractText)
      })
    })
  }, []);

  return (
    <ArtworkView 
      object={props.object} 
      modal={modal} 
      setModal={setModal}
      extract={extract} 
      ClickHandler={ClickHandler}
      position = {position}
      objects = {objects}
    />
  )
}