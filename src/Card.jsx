import React from 'react'

function Card(props) {
    let value = props.X
  return <>
  <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{value.plan}</h5>
              <h6 className="card-price text-center">${value.price}</h6>
              <hr/>
              <ul className="fa-ul">
                <li className={value.userEnabler?"":"text-muted"}><span className="fa-li"><i className={value.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{value.user}</li>
                <li className={value.StorageEnabler?"":"text-muted"}><span className="fa-li"><i className={value.StorageEnabler?"fas fa-check":"fas fa-times"}></i></span>{value.Storage}</li>
                <li className={value.publicProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={value.publicProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{value.publicProjects}</li>
                <li className={value.communityAccessEnabler?"":"text-muted"}><span className="fa-li"><i className={value.communityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{value.communityAccess}</li>
                <li className={value.privateProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={value.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{value.privateProjects}</li>
                <li className={value.SupportEnabler?"":"text-muted"}><span className="fa-li"><i className={value.SupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{value.Support}</li>
                <li className={value.SubDomainEnabler?"":"text-muted"}><span className="fa-li"><i className={value.SubDomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{value.SubDomain}</li>
                <li className={value.ReportEnabler?"":"text-muted"}><span className="fa-li"><i className={value.ReportEnabler?"fas fa-check":"fas fa-times"}></i></span>{value.Report}</li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
  </>
}

export default Card