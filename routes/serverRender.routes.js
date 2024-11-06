const serverRenderController = require('../controllers/serverRender.controller');
const router = require('express').Router();

// Ruta principal
router.get("/", serverRenderController.home);

// Ruta para ver los detalles de una película por título
router.get("/film/:title", serverRenderController.getFilmsByTitle);

// Ruta para manejar el formulario de búsqueda y redirigir a la página de detalles
router.post('/film', (req, res) => {
    const { title } = req.body;
    res.redirect(`/film/${encodeURIComponent(title)}`);
});

// Ruta alternativa si necesitas una lógica diferente (usa solo si es necesario)
// router.post("/film/", serverRenderController.getfilms);

module.exports = router;
