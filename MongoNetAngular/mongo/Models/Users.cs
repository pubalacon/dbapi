using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace mongo.Models
{
    public class Users
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("name")]
        [JsonProperty("Name")]
        public string Name { get; set; }

        [BsonElement("password")]
        [JsonProperty("Password")]
        public string Password { get; set; }

        [BsonElement("mail")]
        [JsonProperty("Mail")]
        public string Mail { get; set; }

        [BsonElement("level")]
        [JsonProperty("Level")]
        public string Level { get; set; }

        [BsonElement("confirmed")]
        [JsonProperty("Confirmed")]
        public bool Confirmed { get; set; }
    }
}
