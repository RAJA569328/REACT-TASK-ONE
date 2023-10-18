import Card from "./Card.jsx";
function App() {
  const X = [
    {
      plan: "FREE",
      price: "0 /month",
      userEnabler:true,
      user: "Single User",
      Storage: "50GB storage",
      StorageEnabler:true,
      publicProjects: "unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess: "Community Access",
      communityAccessEnabler:true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler:false,
      Support: "Dedicated Phone Support",
      SupportEnabler:false,
      SubDomain: "Free SubDomain",
      SubDomainEnabler:false,
      Report: "Monthly Status Reports",
      ReportEnabler:false,
    },
    {
      plan: "PLUS",
      price: "9 /month",
      user: "5 User",
      userbold:true,
      userEnabler:true,
      Storage: "50GB storage",
      StorageEnabler:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess: "Community Access",
      communityAccessEnabler:true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler:true,
      Support: "Dedicated Phone Support",
      SupportEnabler:true,
      SubDomain: "Free SubDomain",
      SubDomainbold:false,
      SubDomainEnabler:true,
      Report: "Monthly Status Reports",
      ReportEnabler:false,
    },
    {
      plan: "PRO",
      price: "49 /month",
      user: "Unlimited User",
      userbold:true,
      userEnabler:true,
      Storage: "5GB storage",
      StorageEnabler:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess: "Community Access",
      communityAccessEnabler:true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler:true,
      Support: "Dedicated Phone Support",
      SupportEnabler:true,
      SubDomain: "Free SubDomain",
      SubDomainbold:true,
      SubDomainEnabler:true,
      Report: "Monthly Status Reports",
      ReportEnabler:true,
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {X.map((y, i) => {
              return <Card X={y} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;