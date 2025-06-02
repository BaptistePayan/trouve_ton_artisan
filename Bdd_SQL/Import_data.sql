-- insert données Catégories :
INSERT INTO categories (nom) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

-- insert données Spéciates :
INSERT INTO specialites (nom) VALUES
('Boucher'),
('Boulanger'),
('Chocolatier'),
('Traiteur'),
('Chauffagiste'),
('Electricien'),
('Menuisier'),
('Plombier'),
('Bijoutier'),
('Couturier'),
('Ferronier'),
('Coiffeur'),
('Fleuriste'),
('Toiletteur'),
('Webdesign');

-- insert données Villes :
INSERT INTO villes (nom) VALUES
('Lyon'),
('Montélimar'),
('Evian'),
('Chamonix'),
('Bourg-en-bresse'),
('Vienne'),
('Aix-les-bains'),
('Annecy'),
('Le Puy-en-Velay'),
('Saint-Priest'),
('Romans-sur-Isère'),
('Annonay'),
('Valence');

-- insert données Entreprises
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Boucherie Dumont',
    4.5,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'boucherie.dumond@gmail.com',
    NULL,
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Alimentation'),
    (SELECT id FROM specialites WHERE nom = 'Boucher'),
    (SELECT id FROM villes WHERE nom = 'Lyon')
);

INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Au pain chaud',
    4.8,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'aupainchaud@hotmail.com',
    TRUE,
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Alimentation'),
    (SELECT id FROM specialites WHERE nom = 'Boulanger'),
    (SELECT id FROM villes WHERE nom = 'Montélimar')
);

INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Chocolaterie Labbé',
    4.9,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'aupainchaud@hotmail.com',
    'https://chocolaterie-labbe.fr',
    TRUE,
    (SELECT id FROM categories WHERE nom = 'Alimentation'),
    (SELECT id FROM specialites WHERE nom = 'Chocolatier'),
    (SELECT id FROM villes WHERE nom = 'Lyon')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Traiteur Truchon',
    4.1,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'contact@truchon-traiteur.fr',
    'https://truchon-traiteur.fr',
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Alimentation'),
    (SELECT id FROM specialites WHERE nom = 'Traiteur'),
    (SELECT id FROM villes WHERE nom = 'Lyon')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Orville Salmons',
    5.0,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'o-salmons@live.com',
    NULL,
    TRUE,
    (SELECT id FROM categories WHERE nom = 'Bâtiment'),
    (SELECT id FROM specialites WHERE nom = 'Chauffagiste'),
    (SELECT id FROM villes WHERE nom = 'Evian')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Mont Blanc Eléctricité',
    4.5,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'contact@mont-blanc-electricite.com',
    'https://mont-blanc-electricite.com',
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Bâtiment'),
    (SELECT id FROM specialites WHERE nom = 'Electricien'),
    (SELECT id FROM villes WHERE nom = 'Chamonix')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Boutot & fils',
    4.7,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'boutot-menuiserie@gmail.com',
    'https://boutot-menuiserie.com',
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Bâtiment'),
    (SELECT id FROM specialites WHERE nom = 'Menuisier'),
    (SELECT id FROM villes WHERE nom = 'Bourg-en-bresse')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Vallis Bellemare',
    4.0,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'v.bellemare@gmail.com',
    'https://plomberie-bellemare.com',
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Bâtiment'),
    (SELECT id FROM specialites WHERE nom = 'Plombier'),
    (SELECT id FROM villes WHERE nom = 'Vienne')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Claude Quinn',
    4.2,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'claude.quinn@gmail.com',
    NULL,
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Fabrication'),
    (SELECT id FROM specialites WHERE nom = 'Bijoutier'),
    (SELECT id FROM villes WHERE nom = 'Aix-les-bains')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Amitee Lécuyer',
    4.5,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'a.amitee@hotmail.com',
    'https://lecuyer-couture.com',
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Fabrication'),
    (SELECT id FROM specialites WHERE nom = 'Couturier'),
    (SELECT id FROM villes WHERE nom = 'Annecy')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Ernest Carignan',
    5,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'e-carigan@hotmail.com',
    NULL,
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Fabrication'),
    (SELECT id FROM specialites WHERE nom = 'Ferronier'),
    (SELECT id FROM villes WHERE nom = 'Le-Puy-en-Velay')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Royden Charbonneau',
    3.8,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'r.charbonneau@gmail.com',
    NULL,
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Services'),
    (SELECT id FROM specialites WHERE nom = 'Coiffeur'),
    (SELECT id FROM villes WHERE nom = 'Saint-Priest')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Leala Dennis',
    3.8,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'l.dennos@hotmail.fr',
    'https://coiffure-leala-chambery.fr',
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Services'),
    (SELECT id FROM specialites WHERE nom = 'Coiffeur'),
    (SELECT id FROM villes WHERE nom = 'Chambéry')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'C est sup hair',
    4.1,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'sup-hair@gmail.com',
    'https://sup-hair.fr',
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Services'),
    (SELECT id FROM specialites WHERE nom = 'Coiffeur'),
    (SELECT id FROM villes WHERE nom = 'Romans-sur-Isère')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Le monde des fleurs',
    4.6,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'contact@le-monde-des-fleurs-annonay.fr',
    'https://le-monde-des-fleurs-annonay.fr',
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Services'),
    (SELECT id FROM specialites WHERE nom = 'Fleuriste'),
    (SELECT id FROM villes WHERE nom = 'annonay')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'Valérie Laderoute',
    4.5,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'v-laredoute@gmail.com',
    NULL,
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Services'),
    (SELECT id FROM specialites WHERE nom = 'Toiletteur'),
    (SELECT id FROM villes WHERE nom = 'Valence')
);
INSERT INTO entreprises (
    nom, note, a_propos, email, site_web, top, categorie_id, specialite_id, ville_id
) VALUES (
    'CM Graphisme',
    4.4,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ant.',
    'contact@cm-graphisme.com',
    'https://cm-graphisme.com',
    FALSE,
    (SELECT id FROM categories WHERE nom = 'Services'),
    (SELECT id FROM specialites WHERE nom = 'Webdesign'),
    (SELECT id FROM villes WHERE nom = 'Valence')
);