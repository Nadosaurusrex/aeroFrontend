import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Grid from '@mui/material/Grid';

const fakeData = [
  {
    id: 1,
    name: 'Item 1',
    description: 'This is the first item.',
    image: '/path/to/image1.png',
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'This is the second item.',
    image: '/path/to/image2.png',
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'This is the third item.',
    image: '/path/to/image3.png',
  },
  {
    id: 4,
    name: 'Item 4',
    description: 'This is the third item.',
    image: '/path/to/image3.png',
  },
  {
    id: 5,
    name: 'Item 5',
    description: 'This is the third item.',
    image: '/path/to/image3.png',
  },
  {
    id: 6,
    name: 'Item 6',
    description: 'This is the third item.',
    image: '/path/to/image3.png',
  },
  {
    id: 7,
    name: 'Item 7',
    description: 'This is the third item.',
    image: '/path/to/image3.png',
  },
  {
    id: 8,
    name: 'Item 8',
    description: 'This is the third item.',
    image: '/path/to/image3.png',
  },
  {
    id: 9,
    name: 'Item 9',
    description: 'This is the third item.',
    image: '/path/to/image3.png',
  },
  // Add more items here...
];

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(item) {
    this.setState({ selectedItem: item });
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <Grid container>
        <Grid item xs={4}>
          <Scrollbars className="scroll-bar" style={{ width: 350, height: 900 }}>
            {fakeData.map((item) => (
              <div
                className="card-item"
                key={item.id}
                onClick={() => this.handleItemClick(item)}
              >
                <img src={item.image} alt={item.name} />
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
            ))}
          </Scrollbars>
        </Grid>
        <Grid item xs={7}>
          {selectedItem && (
            <div className="item-info">
              <h1>{selectedItem.name}</h1>
              <p>{selectedItem.description}</p>
              <img src={selectedItem.image} alt={selectedItem.name} />
            </div>
          )}
        </Grid>
      </Grid>
    );
  }
}



export default MyComponent;