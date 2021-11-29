import React from 'react';

const News = ({ data }) => {
  return (
    <h2 className="content">
      {data}
    </h2>
  )
}

export default News

export async function getStaticProps(context) {
  console.log('Running getStaticProps', context.previewData);
  return {
    props: {
      data: context.preview
        ? 'List of draft articles'
        : 'List of published articles'
    }
  }
}