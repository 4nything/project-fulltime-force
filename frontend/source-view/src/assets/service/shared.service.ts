import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private _snackBar: MatSnackBar
    ) {
    }

    openSnackBar(mensaje: string, duracion: number, type: string) {
        this._snackBar.open(mensaje, '',
            {
                verticalPosition: 'top',
                horizontalPosition: 'center',
                duration: duracion,
                panelClass: [type]
            });
    }
}