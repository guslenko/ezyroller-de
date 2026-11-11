export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname;
  if ((event.method === 'GET' || event.method === 'HEAD') && (path === '/pl' || path.startsWith('/pl/'))) {
    return sendRedirect(event, '/', 301);
  }
});
