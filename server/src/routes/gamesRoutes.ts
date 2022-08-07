import { Router } from 'express';

class GamesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('GAMES'))
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;