import axios from 'axios';
import { useEffect, useRef } from 'react';

export const PageTracker = (path) => {
    const startTimeRef = useRef(null);

    useEffect(() => {
        // Track page load time
        startTimeRef.current = new Date().getTime();

        // Register event listener for page unload
        const handleUnload = async () => {
            const endTime = new Date().getTime();
            const timeSpent = endTime - startTimeRef.current;

            if (timeSpent > 20) {
                console.log(`Time spent on ${path}: ${timeSpent}ms`);
                await axios.post('http://localhost:3000/api/tracker', {
                    path: path,
                    timeSpent: timeSpent
                })
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });

            }
        };

        window.addEventListener('beforeunload', handleUnload());

        // Unregister event listener when component unmounts
        return () => {
            window.removeEventListener('beforeunload', handleUnload());
        };
    });
};
