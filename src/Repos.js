import RepoCard from "./RepoCard.js";

export default function Repos(props) {
  console.log("OS PROPS AQUI!!!!!!!!!!!!!!!!");
  console.log(props);
  if (props.repos.status === "404") {
    return <p>Not found</p>;
  } else {
    return props.repos
      .filter((repo) =>
        repo.name.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
      .map((repo) => <RepoCard key={repo.id} repo={repo} />);
  }
}
