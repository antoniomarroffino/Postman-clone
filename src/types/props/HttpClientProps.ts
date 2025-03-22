import { HttpResponseDTO } from "../model/HttpResponseDTO";

export default interface HttpClientProps {
  url: string;
  search: boolean;
  collections: boolean;
  onResponseMessageClick: (response: HttpResponseDTO) => void;
}