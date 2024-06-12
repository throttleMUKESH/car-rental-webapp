import { gql, request } from 'graphql-request'

export const getCarsList = async () => {
  const query = gql`
  query CarLists {
  carLists {
    carAvg
    createdAt
    id
    name
    price
    publishedAt
    updatedAt
    carBrand
    carType
    image {
      url
    }
  }
}
 `
  const result = await request('https://api-ap-south-1.hygraph.com/v2/clxbfqle702bq07vzpk0uva01/master', query)
 return result;
};
