export const APP_TITLE = 'APP_TITLE';

const TITLE = 'Cursos UFPB - Client Side';

export function app_title() {
  return {
    type: APP_TITLE,
    payload: TITLE
  }
}
