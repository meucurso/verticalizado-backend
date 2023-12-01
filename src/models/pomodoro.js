const connection = require("./connection");

const newTimer = async (timer) => {
    const [newTimer] = await connection.execute(
        "INSERT INTO pomodoro (user_id, title, study_time) VALUES (?, ?, ?)",
        [timer.user_id, timer.title, timer.study_time]
    );
    return newTimer;
};

module.exports = {
    newTimer,
};