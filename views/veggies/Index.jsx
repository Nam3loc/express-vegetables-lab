const React = require('react');

class Index extends React.Component {
    render() {
        const { veggies } = this.props;
        return (
            <div>
                <h1>Veggies Index Page</h1>
                <ul>
                    {
                        veggies.map((veggies, i) => {
                            return (
                                <li key={i}>
                                    The {' '}
                                    <a href={`/veggies/${i}`}>
                                        {veggies.name}
                                    </a>{' '}
                                    is {veggies.color} <br></br>
                                    {veggies.readyToEat
                                        ? 'It is ready to eat'
                                        : 'It is not ready to eat'}
                                    <br />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

module.exports = Index;