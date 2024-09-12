import useFetchData from "./useFetchData";
import { Job } from "../interfaces";
import "bootstrap/dist/css/bootstrap.min.css";

// interface ListItemProps {
//   item: Job;
//   searchQuery: string;
// }

function ListItem({
  item,
  searchQuery,
}: {
  item: Job;
  searchQuery: string;
}): JSX.Element {
  const { jobs /* isLoading , error */ } = useFetchData();

  const filteredJobs = jobs.filter((i) =>
    i.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        {filteredJobs.length > 0 ? (
          <div>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded="true"
                aria-controls={`collapse${item.id}`}
              >
                {item.position}
              </button>
            </h2>
            <div
              id={`collapse${item.id}`}
              className="accordion-collapse collapse"
            >
              <div key={item.id} className="accordion-body">
                <h3 className="accordion-header">{item.role}</h3>
                <p className="accordion-header">{item.company}</p>
                <p className="accordion-header">{item.location}</p>
                <p className="accordion-header">{item.postedAt}</p>
                <p className="accordion-header">{item.tools}</p>
                {item.languages.map((lang, index) => (
                  <p key={`${lang.name}-${index}`} className="accordion-header">
                    {lang.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p>No jobs found matching "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}

export default ListItem;
