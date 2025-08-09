import RepoCard from "./RepoCard.js"

export default function Repos(props) {
    return (
            props.repos.filter((repo) =>
                repo.name.toLowerCase().includes(props.searchTerm.toLowerCase())
            ).map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
            ))
    );
}