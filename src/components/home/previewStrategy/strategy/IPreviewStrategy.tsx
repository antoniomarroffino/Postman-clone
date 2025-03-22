export interface IPreviewStrategy {
  supports(contentType: string): boolean;
  render(
    data: any,
    url: string,
    headers: Record<string, string>
  ): React.ReactNode;
}
