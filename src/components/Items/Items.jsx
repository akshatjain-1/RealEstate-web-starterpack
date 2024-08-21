import React from 'react';
import './Items.css';

const items = [
    { id: 1, name: 'Formal Shirts', image: 'formalshirt.jpg' },
    { id: 2, name: 'Ladies Chord Sets', image: 'chordset.jpg' },
    { id: 3, name: 'Accessories', image: 'photo3.jpg' },
    { id: 4, name: 'Polo T-shirts', image: 'photo4.jpg' },
    { id: 5, name: 'Denim Jeans', image: 'denimjeans.jpg' },
    { id: 6, name: 'Linen Pants', image: 'linen.jpg' },
    { id: 6, name: 'Formal Pants', image: 'formalpants.jpg' },
    { id: 6, name: 'Ladies Kurti', image: 'kurti.jpg' },
    { id: 6, name: 'Designer Shirts', image: 'printedshirts.jpg' },
    { id: 6, name: 'Cotton Kurtis', image: 'kurti2.jpg' },
];

const Items = () => {
    return (
        <div className="items-page">
            <header className="header">
                <h1>Highlighted Products</h1>
            </header>
            <main className="main-content">
                <div className="items-grid">
                    {items.map(item => (
                        <div key={item.id} className="item-card">
                            <img src={item.image} alt={item.name} className="item-image" />
                            <h2 className="item-name">{item.name}</h2>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Items;