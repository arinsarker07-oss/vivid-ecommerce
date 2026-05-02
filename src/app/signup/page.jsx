"use client";

import React from "react";

import { FaUser, FaEnvelope, FaImage, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button, Card, CardHeader, Description, FieldError, Input, Label, Separator, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4 py-12">
            <Card className="max-w-[500px] w-full p-6 shadow-2xl border-none rounded-[2.5rem] bg-white">
                <CardHeader className="flex flex-col gap-2 items-center pb-8">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Create Account</h1>
                    <p className="text-gray-500 text-sm font-medium">Join us and start your summer journey</p>
                </CardHeader>

                <div className="flex flex-col gap-4">
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <TextField isRequired name="name" type="text">
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }

                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="Enter your email" />
                            <FieldError />
                        </TextField>
                        <TextField isRequired name="image" type="url">
                            <Label>Image URL</Label>
                            <Input placeholder="Image URL" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }} >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>
                                Must be at least 8 characters and 1 number
                            </Description>
                            <FieldError />
                        </TextField>

                        <Button
                            type="submit"
                            color="primary"
                            size="lg"
                            className="bg-blue-600 font-bold text-lg h-12 w-full rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95 mt-4"
                        >
                            Register
                        </Button>
                    </form>

                    <div className=" items-center my-3 gap-4">
                        <span className="text-gray-400 text-xl font-extrabold flex justify-center uppercase">Or Continue With</span>
                        <Separator variant="default" />
                    </div>

                    <div className="flex gap-4 justify-center">
                        <Button className={"text-xl font-bold "} variant="outline"> Google <FcGoogle /> </Button>
                        <Button className={"text-xl font-bold"} variant="secondary">GitHub <FaGithub /></Button>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-6 font-medium">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 font-bold hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default RegisterPage;