import axios from 'axios';
import { normalize } from 'normalizr';
import { curriculumSchema } from './schemas';

const BASE_API_URL= 'https://cursos-ufpb.herokuapp.com/api/curricula';

export const getCurricula = () => {
  return axios
    .get(`${BASE_API_URL}/${id}`)
    .then((response) => normalize(response.data, curriculumSchema));
}

export const getCurriculum = (id) => {
  return axios
    .get(`${BASE_API_URL}/${id}`)
    .then((response) => normalize(response.data, curriculumSchema));
}
