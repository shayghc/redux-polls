import React from 'react'
import { connect } from 'react-redux'

function Leaderboard({ users }) {
    console.log('Users: ', users)
    return (
        <ul>
            {users.map((user) => (
                <li className='user' key={user.id}>
                    <img src={user.avatarURL} alt={`Avatar for ${user.name}`} />

                    <div>
                        <h1>{user.name}</h1>
                        <p>{user.polls} Polls</p>
                        <p>{user.answers} Answers</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

function mapStateProps({ users }) {
    return {
        users: Object.keys(users)
            .map((id) => {
                const {name, avatarURL, polls, answers } = users[id]

                return {
                    id,
                    name,
                    avatarURL,
                    polls: polls.length,
                    answers: answers.length
                }
            })
            .sort((a, b) => a.polls + a.answers < b.polls + b.answers)
    }
}

export default connect(mapStateProps)(Leaderboard)