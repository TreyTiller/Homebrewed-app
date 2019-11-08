import React from 'react';

class RoastForm extends React.Component {
    render() {
        return(
            <form>
                <input placeholder="Title" />
                <div className="meta">
                    <input placeholder="Country of Origin" />
                    <input placeholder="Roast Date" />
                </div>
                <div className="flavors">
                    <label>Flavor Notes:</label>
                    <input placeholder="Flavor" />
                    <button>Add</button>
                    <ul>
                        <li>Nutty<button>X</button></li>
                    </ul>
                </div>
                <button>Done</button>
            </form>
        )
    }
}

export default RoastForm;