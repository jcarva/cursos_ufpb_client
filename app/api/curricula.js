import axios from 'axios';
import { normalize } from 'normalizr';
import { curriculumSchema } from './schemas';

const BASE_API_URL= 'https://cursos-ufpb.herokuapp.com/api/curricula';

class CurriculaAPI {
  getCurricula() {
    return axios
      .get(`${BASE_API_URL}`)
      .then((response) => normalize(response.data.curricula, [curriculumSchema]));
  }

  getCurriculum(id) {
    return axios
      .get(`${BASE_API_URL}/${id}`)
      .then((response) => normalize(response.data.curriculum, curriculumSchema));
  }
};

export default new CurriculaAPI;
