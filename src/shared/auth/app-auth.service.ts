import { Injectable } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';

import { ElectronService } from 'ngx-electron';

@Injectable()
export class AppAuthService {


    logout(reload?: boolean): void {
        abp.auth.clearToken();
        localStorage.clear();
        
        if (reload !== false) {
            location.href = AppConsts.appBaseUrl + 'index.html';
        }
    }
}