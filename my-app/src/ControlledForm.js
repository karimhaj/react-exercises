import React from "react";
import { useState } from "react";

export function ControlledForm (){
    return (<form>
                <input type= "text" name= "username" value= ""  />
                <input type= "paassword" name= "password" value= ""  />
                <input type= "checkbox" name= "remember" value= ""  />
                </form>)
}