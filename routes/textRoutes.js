const requireAllowDomain = require('../middlewares/requireAllowDomain');
const fileName = 'text.txt';
const fs = require('fs');

module.exports = (app) => {
    app.get('/text/:id', requireAllowDomain, (req, res) => {
        const s = req.params.id;

        fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
            let comma = '';

            if (data) comma = ',';
            else data = '';

            data = data.split(',');

            if (data.includes(s)) {
                res.send({ 'error': 'same number' });
                return;
            }

            if (err) {
                res.send({ 'error': err });
                return;
            }

            fs.appendFile(fileName, comma + s, (err) => {
                if (err) res.send({ 'error': err });

                res.send({ 'id': s });
            });
        });
    });
};