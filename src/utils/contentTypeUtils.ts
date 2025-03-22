export const getContentType = (headers: Record<string, string>): string => {
    const contentType = headers['content-type'] || '';
    return contentType.split(';')[0].trim().toLowerCase();
  };