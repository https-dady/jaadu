// ============================================================================
// Message Model
// ============================================================================
//
// Purpose:
//
// Ye collection chat ke andar bheje gaye saare messages ko store karegi.
//
// Har document sirf ek message represent karega.
//
// Example:
//
// Rahul:
//
// Hi
//
// Aman:
//
// Hello
//
// Ye dono alag-alag documents honge.
//
// ============================================================================

const mongoose = require("mongoose");

// ============================================================================
// Message Schema
// ============================================================================

const messageSchema = new mongoose.Schema(

    {

        // --------------------------------------------------------------------
        // Kis chat ka message hai.
        // --------------------------------------------------------------------

        chat:{

            type:mongoose.Schema.Types.ObjectId,

            ref:"Chat",

            required:true

        },

        // --------------------------------------------------------------------
        // Message kis user ne bheja.
        // --------------------------------------------------------------------

        sender:{

            type:mongoose.Schema.Types.ObjectId,

            ref:"User",

            required:true

        },

        // --------------------------------------------------------------------
        // Text Message
        //
        // Example:
        //
        // "Hello"
        //
        // --------------------------------------------------------------------

        text:{

            type:String,

            trim:true,

            default:""

        },

        // --------------------------------------------------------------------
        // Future Image Support
        //
        // Cloudinary URL yaha save hoga.
        // --------------------------------------------------------------------

        image:{

            type:String,

            default:""

        },

        // --------------------------------------------------------------------
        // Read Receipt
        //
        // Future me:
        //
        // Blue Tick
        //
        // Seen By
        // --------------------------------------------------------------------

        seenBy:[

            {

                type:mongoose.Schema.Types.ObjectId,

                ref:"User"

            }

        ]

    },

    {

        timestamps:true

    }

);

module.exports = mongoose.model(

    "Message",

    messageSchema

);