import RequestDTO from "../types/model/RequestDTO";

const Request: React.FC<RequestDTO> = ({ id, name, method }) => {
  console.log(id);
  console.log(name);
  console.log(method);
  return <div>{name}</div>;
};

export default Request;
