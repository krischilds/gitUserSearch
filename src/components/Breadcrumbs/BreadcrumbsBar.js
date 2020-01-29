import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function BreadcrumbsBar(props) {
  return createUserBreadcrumbs(
    props.userData,
    props.userRepoList,
    props.basename
  );
}

function createUserBreadcrumbs(user, userRepos, baseName) {
  let crumbs = [];
  if (user) {
    let url3 = `${baseName}#userSearch`;
    crumbs.push(
      <Breadcrumb.Item key={"search"} href={url3}>
        User Search
      </Breadcrumb.Item>
    );
    if (userRepos) {
      let url4 = `${baseName}#`;
      crumbs.push(
        <Breadcrumb.Item key={"name"} href={url4}>
          {user.name ?? user.login}
        </Breadcrumb.Item>
      );
      crumbs.push(
        <Breadcrumb.Item key={"repos"} href="" active="true">
          Repos
        </Breadcrumb.Item>
      );
    } else {
      let url = `${baseName}#`;
      crumbs.push(
        <Breadcrumb.Item href={url} key={"name"} active="true">
          {user.name}
        </Breadcrumb.Item>
      );
      let url2 = `${baseName}#userRepos`;
      crumbs.push(
        <Breadcrumb.Item key={"repos"} href={url2}>
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

  return <Breadcrumb>{crumbs}</Breadcrumb>;
}
