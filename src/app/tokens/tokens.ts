import { InjectionToken } from "@angular/core";
import { UserService } from "../services/user.service";
import { LoggerService } from "../services/logger.service";

export const userToken = new InjectionToken<UserService>('UserService');
export const loggerToken = new InjectionToken<UserService>('UserService');