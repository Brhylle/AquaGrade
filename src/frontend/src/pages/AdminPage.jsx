import { Table, Container, Row, Col } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const AdminPage = ({ isDarkMode, toggleTheme }) => {
  const fishData = [
    { id: 1, name: 'Salmon', time: '2022-03-01 10:00', evaluation: 'Good' },
    { id: 2, name: 'Tuna', time: '2022-03-01 11:00', evaluation: 'Fair' },
    { id: 3, name: 'Trout', time: '2022-03-01 12:00', evaluation: 'Excellent' },
    // Add more fish data as needed
  ];

  const chartData = {
    labels: fishData.map(fish => fish.name),
    datasets: [
      {
        label: 'Fish Evaluation',
        data: fishData.map(fish => {
          switch (fish.evaluation) {
            case 'Excellent':
              return 3;
            case 'Good':
              return 2;
            case 'Fair':
              return 1;
            default:
              return 0;
          }
        }),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Container style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Row className="my-4">
          <Col>
            <h1 className="text-center display-3" style={{ fontFamily: 'Poppins-bold, sans-serif', background: 'linear-gradient(to right, black, white)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Admin Dashboard</h1>
            <p className="text-center lead" style={{ fontFamily: 'Poppins-light, sans-serif' }}>
              Welcome to the Admin Dashboard. Here you can monitor and evaluate the fish data.
            </p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Table striped bordered hover className="text-center" style={{ backgroundColor: 'transparent', border: '1px solid #dee2e6' }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fish Name</th>
                  <th>Time</th>
                  <th>Evaluation</th>
                </tr>
              </thead>
              <tbody>
                {fishData.map(fish => (
                  <tr key={fish.id}>
                    <td>{fish.id}</td>
                    <td>{fish.name}</td>
                    <td>{fish.time}</td>
                    <td>{fish.evaluation}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <h2 className="text-center" style={{ fontFamily: 'Poppins-bold, sans-serif' }}>Fish Evaluation Chart</h2>
            <Line data={chartData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminPage;
