import React from "react";
import { Route, Link } from "react-router-dom";

export default function Rooms({ match }) {
  return (
    <div>
      <h2>여기는 방을 소개</h2>
      <Link to={`${match.url}/blueRoom`}>파란 방</Link>
      <br />
      <Link to={`${match.url}/greenRoom`}>초록 방</Link>
      <br />
      <Route path={`${match.url}/:roomId`} component={Room} />
      <Route exact path={match.url} render={() => <h3>방을 선택필요.</h3>} />
    </div>
  );
}
function Room({ match }) {
  // 함수형에서 match 참조하기
  return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
}
