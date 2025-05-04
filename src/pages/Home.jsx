
import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <Header title="Our Recipes" bgClass="bg-image">
            <Button
                content="SEARCH RECIPES"
                color="green"
                as={Link}
                to="/recipes"
                size="big"
            />
        </Header>
    )
}

export default Home;