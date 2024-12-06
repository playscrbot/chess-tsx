import React from 'react';
import './Cell.css';
import { ICell } from '../../types';
import { isLightSquare } from '../../utils/cell-color';
import Piece from '../Piece/Piece';
import { useDispatch } from 'react-redux';
import { makeMove, useAppSelector } from '../../store';

interface CellProps {
    cell: ICell;
    index: number;
}

const Cell: React.FC<React.PropsWithChildren<CellProps>> = ({ cell, index }) => {

    const {possibleMoves, turn, isCheck, selectedCell} = useAppSelector(state => state.game);
    const dispatch = useDispatch();

    const isLightBlock = isLightSquare(cell.pos, index);

    const isPossibleMove = possibleMoves.includes(cell.pos);
    
    // Determine the `piece` and `color`
    const color = typeof cell.piece === 'string' && cell.piece.toUpperCase() === cell.piece ? 'w' : 'b';

    const inCheck = () => {
        const king = typeof cell.piece === 'string' &&cell.piece.toUpperCase() === 'K';
        return turn === color && king && isCheck;
    };

    const handleDrop = () => {
        dispatch(makeMove({from: selectedCell ?? '', to: cell.pos}));
    };

    return (
        <div
            className={`cell ${isLightBlock ? 'light' : 'dark'} ${isPossibleMove && 'highlight'} ${inCheck() && 'check'}`}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <Piece name={cell.piece} pos={cell.pos} />
            
        </div>
    );
};

export default Cell;