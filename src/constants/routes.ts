export const publicRoutes = {
  home: '/',
  faq: '/faq'
};

export const privateRoutes = {
  courses: '/courses',
  course: (id: string) => `/courses/${id}`
};

export const routes = {
  ...publicRoutes,
  ...privateRoutes
};
