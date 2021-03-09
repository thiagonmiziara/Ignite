interface RepositoryItemProps {
  repository: {
    name: String;
    description: String;
    html_url: String;
  };
}

const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <div>
      <li>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>

        <a href={props.repository.html_url}>Acessar repositório</a>
      </li>
    </div>
  );
};

export default RepositoryItem;
