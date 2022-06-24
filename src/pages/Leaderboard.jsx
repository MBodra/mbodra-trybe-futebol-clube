import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LeaderboardTable from '../components/LeaderboardTable';
import LoginBtn from '../components/LoginBtn';
import MatchesBtn from '../components/MatchesBtn';
import TableFilter from '../components/TableFilter';
import '../styles/pages/leaderboard.css';

const Leaderboard = () => {
  const [logged, setLogin] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('Classificação Geral');

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) return setLogin(false);

    if (JSON.parse(user).token) return setLogin(true);
  }, [logged, setLogin]);

  return (
    <>
      <div className="alert">
        <span className="closebtn" onClick={ ({ target }) => target.parentElement.style.display = 'none' }>&times;</span>
          Frontend desenvolvido por <a href="https://www.betrybe.com/" className='alert-link'>Trybe</a>. Backend desenvolvido por <a href="https://www.linkedin.com/in/matheus-bodra/" className='alert-link'>Matheus Bodra</a>. Para mais informações leia o <a href="https://github.com/MBodra/mbodra-trybe-futebol-clube/tree/master#projeto-trybe-futebol-clube-%EF%B8%8F" className='alert-link'>README</a> do projeto.
      </div>
      <Header
        page="CLASSIFICAÇÃO"
        FirstNavigationLink={ MatchesBtn }
        SecondNavegationLink={ LoginBtn }
        logged={ logged }
        setLogin={ setLogin }
      />
      <div className="classification-handlers score-board-table-section">
        <TableFilter
          currentFilter={ currentFilter }
          setCurrentFilter={ setCurrentFilter }
        />
      </div>
      <LeaderboardTable
        currentFilter={ currentFilter }
        setCurrentFilter={ setCurrentFilter }
      />
    </>
  );
};

export default Leaderboard;
