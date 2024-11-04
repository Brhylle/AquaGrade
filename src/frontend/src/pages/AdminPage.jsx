import { Container, Row, Col } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const AdminPage = ({ isDarkMode, toggleTheme }) => {
  const fishData = [
    { id: 1, name: 'Bangus', time: '2022-03-01 10:00', evaluation: 'Good' },
    { id: 2, name: 'Tilapia', time: '2022-03-01 11:00', evaluation: 'Fair' },
    { id: 3, name: 'Galunggong', time: '2022-03-01 12:00', evaluation: 'Excellent' },
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
            <h1 className="text-center display-3" style={{ fontFamily: 'Poppins-bold, sans-serif', background: 'linear-gradient(to right, black, white)', WebkitBackgroundClip: 'text', color: 'transparent' }}>ADMIN DASHBOARD</h1>
            <p className="text-center lead text-sm" style={{ fontFamily: 'Poppins-light, sans-serif', color: 'white' }}>
              Welcome to the Admin Dashboard. Here you can monitor and evaluate the fish data.
            </p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <table className="table table-striped" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#333333', color: '#FFFFFF' }}>
                <tr>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>ID</th>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>Fish Name</th>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>Time</th>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>Evaluation</th>
                </tr>
              </thead>
              <tbody>
                {fishData.map(fish => (
                  <tr key={fish.id} style={{ backgroundColor: '#E5E7EB' }}>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{fish.id}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{fish.name}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{fish.time}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{fish.evaluation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
