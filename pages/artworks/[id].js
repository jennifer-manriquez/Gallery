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
  const wikidata = worksData.objectWikidata_URL.match(/(\d+)/)[0];
  const wikipediaTitle1 = await fetchWikiData(wikidata);
  const wikipediaTitle2 = wikipediaTitle1.entities[`Q${wikidata}`].labels.en.value.split(' ').join('_');
  const queryData = await fetchWikipediaExtract(wikipediaTitle2);
  const wikipediaQueryData = queryData.query.pages;
  let pageid;
  for (var key in wikipediaQueryData) {
    pageid = key
  }
  const extractText = wikipediaQueryData[pageid].extract;

  if (!worksData | !allWorksData ) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      object: worksData,
      objects: allWorksData,
      extractText
    }
  }
}

export default function ViewbyID(props) {
  const data = props.object;
  const current = props.object.objectID;
  const objects = props.objects;
  const extract = props.extractText;
  const position = objects.indexOf(current);
  const [modal, setModal] = useState(false);

  const ClickHandler = (value) =>{
    setModal(value);
  }

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