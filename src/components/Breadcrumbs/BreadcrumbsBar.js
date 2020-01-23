import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function BreadcrumbsBar(props) {
  return createUserBreadcrumbs(props.userData, props.userRepoList);
}

function createUserBreadcrumbs(user, userRepos) {
  let crumbs = [];
  if (user) {
    crumbs.push(
      <Breadcrumb.Item key={"search"} href="/userSearch">
        User Search
      </Breadcrumb.Item>
    );
    if (userRepos) {
      crumbs.push(
        <Breadcrumb.Item key={"name"} href="/">
          {user.name ?? user.login}
        </Breadcrumb.Item>
      );
      crumbs.push(
        <Breadcrumb.Item key={"repos"} href="" active="true">
          Repos
        </Breadcrumb.Item>
      );
    } else {
      crumbs.push(
        <Breadcrumb.Item href="/" key={"name"} active="true">
          {user.name}
        </Breadcrumb.Item>
      );
      crumbs.push(
        <Breadcrumb.Item key={"repos"} href="/userRepos">
          Repos
        </Breadcrumb.Item>
      );
    }
  } else {
    crumbs.push(
      <Breadcrumb.Item href="" key={"search"} active="true">
        User Search
      </Breadcrumb.Item>
    );
  }

  /*
  const breadcrumbs = crumbs.map(({ url, label }) => (
    <Breadcrumb.Item key={url} href={url}>
      {label}
    </Breadcrumb.Item>
  ));
*/

  return <Breadcrumb>{crumbs}</Breadcrumb>;
}
