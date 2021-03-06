﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

using mongo.Models;
using mongo.Services;
using MongoDB.Bson;

namespace mongo.Controllers
{
    [EnableCors("UsersPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UsersService _userService;

        public UsersController(UsersService userService)
        {
            _userService = userService;
        }

        [Route("")]
        [Route("GetAllUsers")]
        [HttpGet]
        public ActionResult<List<Users>> Get() =>
            _userService.Get();

        [Route("GetUserById/{id}")]
        [HttpGet("{id:length(24)}", Name = "GetUser")]
        public ActionResult<Users> Get(string id)
        {
           var user = _userService.Get(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [Route("Add")]
        [HttpPost]
        public ActionResult<Users> Create(Users user)
        {
            _userService.Create(user);

            return CreatedAtRoute("GetUser", new { id = user.Id.ToString() }, user);
        }

        [Route("Update/{id}")]
        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Users userIn)
        {
            var user = _userService.Get(id);

            if (user == null)
            {
                return NotFound();
            }

            _userService.Update(id, userIn);

            return NoContent();
        }

        [Route("Delete/{id}")]
        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var user = _userService.Get(id);

            if (user == null)
            {
                return NotFound();
            }

            _userService.Remove(user.Id);

            return NoContent();
        }
    }
}
