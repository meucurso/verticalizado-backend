const pomodoroModel = require('../models/pomodoro');

const newTimer = async (req, res) => {
    try {
        const { user_id, title, study_time } = req.body;
        const timer = await pomodoroModel.newTimer({ user_id, title, study_time });
        return res.status(200).json(timer);
    } catch (error) {
        console.error('Erro ao inserir timer:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    newTimer,
};