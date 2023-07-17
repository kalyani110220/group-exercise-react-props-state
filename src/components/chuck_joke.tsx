import React from 'react';
import Joke from '../joke';

interface ChuckJokeProps {
    joke: Joke;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ joke }) => {
    return <p>{joke.joke}</p>; // Update the property access
 

};

export default ChuckJoke;
