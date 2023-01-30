import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({employees,handleEmployeeCardClick,selectedTeam }) => {
    return (
       employees.map((employee)=>(
        <TeamMemberCard handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} employee={employee} />
       ))
    );
};

export default TeamMembers;