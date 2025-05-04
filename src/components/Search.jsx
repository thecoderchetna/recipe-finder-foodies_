import { useState } from 'react';
import { Grid, Form, Input } from 'semantic-ui-react';

const Search = ({ setSearchedQuery }) => {
    const [value, setValue] = useState("");

    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
        <Grid column={2} textAlign="center" className='search-box'>
            <Grid.Column>
                <h2 className='search-heading'>
                    Search your favourite recipes here <span style={{ color: '#2185D0' }}></span>
                </h2>
                <h4>Enter ingredients</h4>
                <Form onSubmit={onFormSubmit}>
                    <Input 
                        placeholder="garlic,tomoto,onion"
                        action={{ icon: 'search', color: 'blue' }}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Search;