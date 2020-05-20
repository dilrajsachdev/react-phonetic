import React, { useState, useEffect, useCallback } from "react";
import Header from "../Components/UI/Header";
import axios from "axios";
import { Typography, Card, withStyles, Grid, CardMedia, CardHeader, Button, CardActions } from "@material-ui/core";
import Loader from "../Components/UI/Loader";

const RandomMeme = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [randomImageUrl, setRandomImageUrl] = useState("");
    const [randomImageName, setRandomImageName] = useState("");

    const getRandomImage = useCallback(() => {
        if (data) {
            let randomNumber = Math.floor(Math.random() * data.length);
            setRandomImageUrl(data[randomNumber].url);
            setRandomImageName(data[randomNumber].name);
        }
    }, [data]);

    const fetchData = async () => {
        setLoading(true);
        // const result = await axios("https://hn.algolia.com/api/v1/search?query=redux");
        await axios("https://api.imgflip.com/get_memes").then((res) => {
            // console.log(res.data);
            setData(res.data.data.memes);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        getRandomImage();
    }, [getRandomImage, data]);

    let content;
    if (loading) {
        content = (
            <div style={{ textAlign: "center" }}>
                <Loader />
            </div>
        );
    } else {
        content = (
            <Card>
                <CardHeader title={randomImageName} />
                <CardActions>
                    <Button variant="contained" size="small" color="primary" onClick={getRandomImage}>
                        Generate Random meme
                    </Button>
                </CardActions>
                <CardMedia component="img" image={randomImageUrl} title="Random meme" />
            </Card>
        );
    }

    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item xs={false} sm={2} />
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h4" >Random Meme</Typography>
                        {content}
                    </Grid>
                    <Grid item xs={false} sm={2} />
                </Grid>
            </Grid>
        </div>
    );
};

const styles = (theme) => ({
    root: {
        maxWidth: 345,
    },
});

export default withStyles(styles)(RandomMeme);
