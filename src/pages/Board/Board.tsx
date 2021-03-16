import React, { ReactElement } from 'react';

export default class Board extends React.PureComponent {
  render(): ReactElement {
    return (
      <>
        <h1>My board</h1>
        <div className="cards">
          <div className="card">
            <h4>First desc</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a voluptas in eveniet explicabo adipisci
              dolor sequi ipsam at, assumenda reiciendis laboriosam quas qui sit magni hic deserunt ea natus!
            </p>
          </div>
          <div className="card">
            <h4>Second desc</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a voluptas in eveniet explicabo adipisci
              dolor sequi ipsam at, assumenda reiciendis laboriosam quas qui sit magni hic deserunt ea natus! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nobis a voluptas in eveniet explicabo adipisci dolor
              sequi ipsam at, assumenda reiciendis laboriosam quas qui sit magni hic deserunt ea natus!
            </p>
          </div>
          <div className="card">
            <h4>Third desc</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a voluptas in eveniet explicabo adipisci
              dolor sequi ipsam at, assumenda reiciendis laboriosam quas qui sit magni hic deserunt ea natus!
            </p>
          </div>
        </div>
      </>
    );
  }
}
