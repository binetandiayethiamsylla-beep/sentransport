function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((sum, ligne) => sum + ligne.arrets, 0);
  const ligneMax = lignes.reduce((max, ligne) => 
    ligne.arrets > max.arrets ? ligne : max, lignes[0]);

  return (
    <div className="stat-reseau">
      <div className="stat-item">
        <h3>{totalLignes}</h3>
        <p>Lignes</p>
      </div>
      <div className="stat-item">
        <h3>{totalArrets}</h3>
        <p>Total arrêts</p>
      </div>
      <div className="stat-item">
        <h3>Ligne {ligneMax.numero}</h3>
        <p>Plus d'arrêts ({ligneMax.arrets})</p>
      </div>
    </div>
  );
}

export default StatReseau;